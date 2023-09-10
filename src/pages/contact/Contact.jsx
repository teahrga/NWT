import Sidebar from "../../components/sidebar/Sidebar"
import "./contact.css"

export default function Contact() {
  return (
    <div className="contact">
        <div className="contactItem"></div>
            <span className="contactTitle">Contact me here!</span>
            <p className="contactTitleSm">Email:</p>
            <p>
                maja.travelblog@gmail.com
            </p>
            <p className="contactTitleSm">Instagram:</p>
            <p>
                maja.travelBlog
            </p>
            <p className="contactTitleSm">Facebook:</p>
            <p>
                https://www.facebook.com/MajaTravelBlog
            </p>
        <Sidebar />

        </div>
  )
}
