import { useState, useCallback } from 'react'

const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments)
    
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

const useForm = initial => {
  const [form, setForm] = useState(initial)

  const setField = useCallback((...data) => {
    if(typeof data[0] !== 'string') {
      setForm(form => ({ ...form, ...data[0] }))
    } else {
      const [ name, value ] = data
      setForm(form => ({ ...form, [name]: value }))
    }
  }, [])

  const debouncedSetValue = useCallback(
    debounce((name, value) => {
      setForm(form => ({ ...form, [name]: value }))
    }, 250),
    []
  )

  const changeInput = useCallback(e => {
    const { name, value } = e.target
    setForm(form => ({ ...form, [name]: value }))
  }, [])

  const debouncedChangeInput = useCallback(e => {
    const { name, value } = e.target
    debouncedSetValue(name, value)
  }, [debouncedSetValue])

  const bindInput = useCallback((name, useDebouncing) => ({
    name,
    [ useDebouncing ? 'defaultValue' : 'value' ]: form[name],
    onChange: useDebouncing ? debouncedChangeInput : changeInput,
  }), [changeInput, debouncedChangeInput, form])

  return {
    form,
    setForm,
    setField,
    changeInput,
    bindInput,
  }
}

export default useForm