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
    <>
      <h2 className="font-display text-center text-4xl py-5">Get to Know Me</h2>
      <p className="font-sans text-xl pb-5">
        Twice a month, I curate a newsletter about coding. Expect content about{" "}
        <span className="shadowed font-bold">anti-racism</span>,{" "}
        <span className="shadowed font-bold">accessible design</span>,{" "}
        <span className="shadowed font-bold">productivity</span>,{" "}
        <span className="shadowed font-bold">online privacy</span>, and{" "}
        <span className="shadowed font-bold">digital wellness</span>.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap xl:flex-no-wrap justify-between lg:space-x-2">
          <input
            type="text"
            name="EMAIL"
            placeholder="Email"
            id="Email"
            value={emailAddress}
            className="w-full md:w-auto flex-auto border-2 border-baby-pink-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-baby-pink-300"
            onChange={e => setEmailAddress(e.target.value)}
          />
          <input
            type="text"
            name="FNAME"
            placeholder="First Name"
            id="FNAME"
            value={firstName}
            className="w-full md:w-auto flex-auto border-2 border-baby-pink-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-baby-pink-300"
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            className="w-full md:w-auto flex-none py-2 px-4 rounded bg-blue-yonder text-azure-x-100"
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
    </>
  )
}
