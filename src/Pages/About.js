import React from 'react'

class About extends React.Component{
    constructor(){
        super()
        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Default",
                bio:"",
                avatar_url:"",
                html_url:""

            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/abhay0480-eng")
        const jsondata = await data.json()
        this.setState({
            userInfo: jsondata
        })
        
    }
    render(){
        const { name, location, bio, avatar_url, html_url } = this.state.userInfo;
        return(
            <div className="max-w-xs mx-auto p-4 bg-white rounded-lg shadow-lg hover:scale-105 duration-200 text-center">
            <img src={avatar_url} alt="GitHub Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{name || "GitHub User"}</h2>
            <p className="text-gray-600 text-sm mb-2">{bio || "This user has no bio."}</p>
            <p className="text-gray-500 text-xs mb-4">{location || "Location unknown"}</p>
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              View GitHub Profile
            </a>
          </div>
        )
    }
}


export default About
