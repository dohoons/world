import { useState, useCallback } from 'react'

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

  const changeInput = useCallback(e => {
    const { name, value } = e.target
    setForm(form => ({ ...form, [name]: value }))
  }, [])

  const bindInput = useCallback(name => ({
    name,
    value: form[name],
    onChange: changeInput,
  }), [changeInput, form])

  return {
    form,
    setForm,
    setField,
    changeInput,
    bindInput,
  }
}

export default useForm