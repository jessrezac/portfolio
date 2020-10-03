import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default function SignUpForm(props) {
  const [emailAddress, setEmailAddress] = useState()
  const [firstName, setFirstName] = useState()
  const [successMessage, setSuccessMessage] = useState()
  const [errorMessage, setErrorMessage] = useState()

  let handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(emailAddress, { FNAME: firstName }).then(data => {
      setEmailAddress("")
      setFirstName("")
      if (data.result === "success") {
        setSuccessMessage(data.msg)
        setErrorMessage()
      } else {
        setErrorMessage(data.msg)
      }
    })
  }

  return (
    <section className="-mt-20 bg-morning-blue px-10 py-5 w-60 ml-auto mr-auto relative z-10 object-center text-azure-x-100">
      <p className="font-sans bold py-2">
        Twice a month, I curate a newsletter about coding with inspiration from{" "}
        <span className="blue-shadowed font-bold">anti-racism</span>,{" "}
        <span className="blue-shadowed font-bold">accessible design</span>,{" "}
        <span className="blue-shadowed font-bold">productivity</span>,{" "}
        <span className="blue-shadowed font-bold">online privacy</span>, and{" "}
        <span className="blue-shadowed font-bold">digital wellness</span>.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between space-x-4">
          <input
            type="text"
            name="EMAIL"
            placeholder="Email"
            id="Email"
            value={emailAddress}
            className="flex-auto border-2 border-baby-pink-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-baby-pink-300"
            onChange={e => setEmailAddress(e.target.value)}
          />
          <input
            type="text"
            name="FNAME"
            placeholder="First Name"
            id="FNAME"
            value={firstName}
            className="flex-auto border-2 border-baby-pink-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-baby-pink-300"
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            className="flex-none py-2 px-4 rounded bg-blue-yonder text-azure-x-100"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      {errorMessage && (
        <p
          dangerouslySetInnerHTML={{ __html: errorMessage }}
          className="text-xs py-2"
        />
      )}
      {successMessage && (
        <p
          dangerouslySetInnerHTML={{ __html: successMessage }}
          className="text-xs py-2"
        />
      )}{" "}
    </section>
  )
}
