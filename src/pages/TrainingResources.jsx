import React from 'react'

function TrainingResources() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Training Resources</h1>
        <p className="text-gray-700 text-lg">
          Access resources to enhance your first aid knowledge and skills. Watch videos, read guides, and participate in online training to be better prepared for emergencies.
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/q7owGvx1syY"
              title="Basic First Aid Training for Everyone"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Basic First Aid Training for Everyone</h3>
              <p className="text-gray-600">Learn essential first aid skills to handle emergencies effectively.</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/HzgTz9kDPMg"
              title="How to Perform CPR Correctly"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold">How to Perform CPR Correctly</h3>
              <p className="text-gray-600">A step-by-step guide to performing CPR for adults and children.</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/kOQWixH9FGs"
              title="Emergency Bandaging Techniques"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Emergency Bandaging Techniques</h3>
              <p className="text-gray-600">Learn how to apply bandages for common injuries during emergencies.</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/UCgGm5n7Mqs"
              title="First Aid for Choking"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold">First Aid for Choking</h3>
              <p className="text-gray-600">Learn how to handle choking incidents in adults and children.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <a
              href="https://www.redcross.org/take-a-class/first-aid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              American Red Cross - First Aid Training
            </a>
          </li>
          <li>
            <a
              href="https://www.firstaidforfree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              First Aid for Free
            </a>
          </li>
          <li>
            <a
              href="https://www.stjohn.org.nz/First-Aid/First-Aid-Training/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              St. John - First Aid Training
            </a>
          </li>
          <li>
            <a
              href="https://www.who.int/news-room/fact-sheets/detail/first-aid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              WHO - First Aid Overview
            </a>
          </li>
          <li>
            <a
              href="https://www.nsc.org/safety-first-aid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              National Safety Council - First Aid
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TrainingResources