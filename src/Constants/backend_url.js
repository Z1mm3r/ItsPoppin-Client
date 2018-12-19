const baseurl = "http://localhost:3000/api/v1"

const endpoints = {
  users: `${baseurl}/users`,
  establishments: `${baseurl}/establishments`,
  login:`${baseurl}/login`,
  checkIn:`${baseurl}/checkIn`,
  checkOut:`${baseurl}/checkOut`,
  defaultProfilePicture:`https://image.freepik.com/free-icon/profile-user-with-question-mark_318-41366.jpg`
}

export default endpoints
