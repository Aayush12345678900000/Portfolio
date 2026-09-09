function Contact() {
    return (
        <div className="bg-gray-950 p-8">
            <h2 className="text-white text-3xl font-bold text-center mt-8 mb-6">Connect With Me</h2>
            <div className="flex flex-col items-center gap-4 text-gray-300 mt-4">
                <a href="mailto:aayushsinghrajput722@gmail.com" className="hover:text-blue-400 transition-colors text-lg">
                    ✉️ aayushsinghrajput722@gmail.com
                </a>
                <a href="tel:+917043550484" className="hover:text-blue-400 transition-colors text-lg">
                    📞 +91 7043550484
                </a>
                <a href="https://www.linkedin.com/in/aayush-jadoun-69717025b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-lg">
                    🔗 LinkedIn Profile
                </a>
                <a href="https://github.com/Aayush12345678900000" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-lg">
                    💻 GitHub Profile
                </a>
            </div>
        </div>
    )
}

export default Contact;