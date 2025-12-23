import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [uploadError, setUploadError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    const maxSize = 10 * 1024 * 1024 // 10MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
    
    setUploadError('') // Clear previous errors
    
    const validFiles = []
    const errors = []
    
    files.forEach(file => {
      if (file.size > maxSize) {
        errors.push(`${file.name} is too large (max 10MB)`)
      } else if (!allowedTypes.includes(file.type)) {
        errors.push(`${file.name} has an unsupported file type`)
      } else {
        // Add unique identifier to each file
        validFiles.push({
          file,
          id: `${file.name}-${file.size}-${file.lastModified}`
        })
      }
    })
    
    if (errors.length > 0) {
      setUploadError(errors.join('. '))
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles])
    e.target.value = '' // Reset input
  }

  const removeFile = (id) => {
    setUploadedFiles(prev => prev.filter(item => item.id !== id))
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create email with form data
    const subject = encodeURIComponent('AI Solutions Inquiry from ' + formData.name)
    let body = 
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n\n` +
      `Message: ${formData.message}`
    
    // Add file information if files are attached
    if (uploadedFiles.length > 0) {
      body += `\n\nAttached Files (${uploadedFiles.length}):\n`
      uploadedFiles.forEach((item, index) => {
        body += `${index + 1}. ${item.file.name} (${formatFileSize(item.file.size)})\n`
      })
      body += '\nNote: Please reply to this email and the sender will share the files with you.'
    }
    
    window.location.href = `mailto:jon@folsetech.net?subject=${subject}&body=${encodeURIComponent(body)}`
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' })
    setUploadedFiles([])
    setUploadError('')
  }

  const contactInfo = [
    {
      title: "Email Us",
      info: "jon@folsetech.net",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Call Us",
      info: "225-313-1914",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Visit Us",
      info: "Gonzales, LA 70737",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Schedule",
      info: "Mon-Fri, 9AM-6PM CST",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you 
            achieve your goals with our cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>

              {/* File Upload Section */}
              <div>
                <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-300 mb-2">
                  Attach Files (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
                  />
                  <label
                    htmlFor="fileUpload"
                    className="w-full flex items-center justify-center px-4 py-3 bg-gray-900/50 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:border-orange-500 hover:text-orange-400 cursor-pointer transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm">Click to upload files</span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Images, PDFs, or documents up to 10MB
                </p>

                {/* Display error message */}
                {uploadError && (
                  <div className="mt-2 p-3 bg-red-900/20 border border-red-500/50 rounded-lg">
                    <p className="text-sm text-red-400">{uploadError}</p>
                  </div>
                )}

                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-2"
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white truncate">{item.file.name}</p>
                            <p className="text-xs text-gray-400">{formatFileSize(item.file.size)}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(item.id)}
                          className="ml-4 text-red-400 hover:text-red-300 transition-colors duration-200 flex-shrink-0"
                          aria-label="Remove file"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400/60 hover:from-orange-700 hover:via-orange-600 hover:to-yellow-500/70 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
              >
                🔥 Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-400/60 rounded-lg flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Start Live Chat</span>
                </button>
                
                <button className="w-full bg-gradient-to-r from-yellow-500/80 to-yellow-400/60 hover:from-yellow-600/90 hover:to-yellow-500/70 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule a Call</span>
                </button>
              </div>
            </div>

            {/* FAQ Snippet */}
            <div className="bg-gradient-to-r from-orange-600/20 to-yellow-400/10 border border-orange-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Q: How long does an AI project take?</span><br />
                  A: Project timelines vary from 2-12 weeks depending on complexity.
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Q: Do you offer ongoing support?</span><br />
                  A: Yes, we provide 24/7 support and maintenance for all our solutions.
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Q: Can you integrate with existing systems?</span><br />
                  A: Absolutely! We specialize in seamless integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact