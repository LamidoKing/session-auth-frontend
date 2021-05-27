import { ChangeEvent, useEffect, useState } from "react"

const useForm = ({ initialState }: { initialState: any }) => {
  const [values, setValues] = useState(initialState)
  const [body, setBody] = useState()
  const [isnoEmpathyValue, setIsNoEmpathyValue] = useState(true)

  const handleChange =
    (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      setValues({ ...values, [prop]: value })
    }

  const handleSummit = () => {
    setBody(values)
  }

  useEffect(() => {
    const empathyField = []
    const valuesKeys = Object.keys(values)

    valuesKeys.map((key) => {
      if (!values[key]) {
        empathyField.push(key)
      }
      return ""
    })

    const noEmpathy = () => empathyField.length === 0

    setIsNoEmpathyValue(noEmpathy)
  }, [values])

  return {
    handleChange,
    isnoEmpathyValue,
    body,
    values,
    handleSummit,
  }
}

export default useForm
