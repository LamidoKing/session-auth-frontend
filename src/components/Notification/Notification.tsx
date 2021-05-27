import { useEffect, useState } from "react"
import Snackbar from "@material-ui/core/Snackbar"

export interface NotificationProps {
  isError: boolean
  message: string
}

const Notification = ({ isError, message }: NotificationProps) => {
  const [open, setopen] = useState(false)

  const closeNotification = () => {
    setopen(false)
  }

  useEffect(() => {
    if (isError) {
      setopen(true)
    }
    return () => {
      setopen(false)
    }
  }, [isError])

  return (
    <div>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={closeNotification}
        message={message}
      />
    </div>
  )
}

export default Notification
