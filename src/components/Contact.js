import Nav from "./Nav";
import Footer from "./Footer";
import "../assets/contact.css";

export default function Contact ({ setScreen }) {
    return (
        <div>
            <Nav setScreen={setScreen} />
            
            <div className="contactcontainer">
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <br />
                    <label>Email:</label>
                    <input type="text" required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                    <br />
                    <label>Message:</label>
                    <textarea rows={8} type="text" /> 
                    <input type="Submit" value="Send Message" className="submit-button" />   
                </form>
            </div>
            
            <Footer />
        </div>
    );
}

