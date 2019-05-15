import { useState, useCallback } from 'react'

const useForm = initial => {
  const [form, setForm] = useState(initial)

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
    changeInput,
    bindInput,
  }
}

export default useForm