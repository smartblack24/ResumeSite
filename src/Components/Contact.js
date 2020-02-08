import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
   content : {
     top                   : '50%',
     left                  : '50%',
     right                 : 'auto',
     bottom                : 'auto',
     marginRight           : '-50%',
     transform             : 'translate(-50%, -50%)'
   }
};
Modal.setAppElement('#root');

class Contact extends Component {
   constructor (props) {
      super(props);
      this.state = {
         email: '',
         subject: '',
         name: '',
         message: '',
         isOpen: false,
      }
   }

   handleChange = (field, e) => {
      this.setState({
         [field]: e.target.value
      })
   }

   closeModal = () => {
      this.setState({
         isOpen: false
      })
   }
   onSubmit = (e) => {
      e.preventDefault();
      window.emailjs.send("gmail",
      this.props.data.templateId,
      {"subject": this.state.subject,
      "from_name": this.state.name,
      "to_name": this.props.data.name,
      "message_html": this.state.message,
      "reply_to": this.state.email})
      .then(res => {
         this.setState({
            isOpen: true,
            message: 'Success',
         })
      })
      .catch(err => {
         console.log("err", err)
         this.setState({
            isOpen: true,
            message: 'Error'
         })
      })
   }

   render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Contact Message"
         >
            <h2>{this.state.message}</h2>
            {this.state.message == "Success" ? (<div>
               <p>Thanks for contacting me, {this.state.name}</p>
               <p>I will contact you as soon as possible</p>
               <p>Best Regards</p>
            </div>) :(
               <div>
                  <p>Sorry, Can't Send Message To Giacomo</p>
                  <p>Please Try again or Send Direct Email</p>
                  <p>Thanks</p>
               </div>
            )}
         </Modal>
         <div className="row section-head">

            <div className="two columns header-col">
               <h1><i className="fas fa-envelope"></i><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
               <p className="lead">{message}</p>
            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <form onSubmit={this.onSubmit}>
					   <fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input required type="text" size="35" id="contactName" name="contactName" value={this.state.name} onChange={(e) => this.handleChange("name", e)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input required type="email" size="35" id="contactEmail" name="contactEmail" value={this.state.email} onChange={(e) => this.handleChange("email", e)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input required type="text" size="35" id="contactSubject" name="contactSubject" value={this.state.subject} onChange={(e) => this.handleChange("subject", e)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea required cols="50" rows="15" id="contactMessage" name="contactMessage" value={this.state.message} onChange={(e) => this.handleChange("message", e)}></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>Mail: </h4>
                  <h5><a href={`mailto:${email}`} ><span>{email}</span></a></h5>
					   <h4>Address</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
   }
}

export default Contact;
