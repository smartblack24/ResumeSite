import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      //var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio1 = this.props.data.bio1;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         {/* <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div> */}
         <div className="tweleve columns main-col">
            <h2>About Me</h2>

            <p style={{color:'#AAAAAA'}}>{bio}</p>
            <p style={{color:'#AAAAAA'}}>{bio1}</p>
            <p style={{color:'#AAAAAA'}}>{bio2}</p>
            <p style={{color:'#AAAAAA'}}>{bio3}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span> {city} {state}</span><br />
						   <span>{phone}</span><br />
                     <a href={`mailto:${email}`} ><span>{email}</span></a>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
