import axios from "axios"
import { useState } from "react"
import { getToken } from "../config/AuthService"

function SendManual() {
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [isMedia, setIsMedia] = useState(false)
    const [media, setMedia] = useState("")

    function sendData(e) {
        e.preventDefault()
        if(isMedia) {
            const formData = new FormData()
            formData.append("file", media)
            formData.append("number", number)
            formData.append("message", message)
            axios.post("https://sc-hyouka.com/api/send-media", formData, { headers: {
                "Content-Type": 'multipart/form-data',
                "Authorization": 'Bearer ' + getToken()
            }})
            .then(res => console.log(res)).catch(err => console.log(err))
        } else { axios.post("https://sc-hyouka.com/api/send-message", { number, message }, { headers: {
            "Authorization": 'Bearer ' + getToken()
        }}) }
        setNumber("")
        setMessage("")
    }

  return (<>
    <h1 className="text-2xl font-bold text-slate-700">Send Manual</h1>
    <main className="mt-10">
        <form className="flex flex-col space-y-4" onSubmit={(e) => sendData(e)}>
            <div>
                <label htmlFor="number" className="font-semibold text-slate-600">Number</label>
                <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" id="number" placeholder="62895324443540" className="mt-2 ring-1 ring-slate-400 rounded focus:outline-slate-800 px-2 py-1 w-full" />
            </div>
            <div>
                <label htmlFor="message" className="font-semibold text-slate-600">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} type="text" id="message" placeholder="Message" className="mt-2 ring-1 ring-slate-400 rounded focus:outline-slate-800 px-2 py-1 w-full" />
            </div>
            <div className="flex justify-center w-full flex-col">
                <label className="font-semibold text-slate-600"><input type="checkbox" onChange={() => setIsMedia(prev => !prev)} /> Media?</label>
                <label htmlFor="dropzone-file" className="mt-2 flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            {
                media ? <p>{media.name}</p> :
                <>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click upload media</span> or drag & drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">png, jpg, jpeg & pdf (Optional)</p>
                </>
            }
            </div>
            <input onChange={(e) => setMedia(e.target.files[0])}  id="dropzone-file" type="file" className="hidden" />
            </label>
            </div> 
            <button type="submit" className="rounded bg-cyan-950 text-white font-semibold py-2">Send Message</button>
        </form>
    </main>
  </>)
}
export default SendManual
