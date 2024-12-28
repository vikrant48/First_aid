import React from 'react';
import kit from '../assets/kit.png'

function FirstAidKits() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full max-w-4xl text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
                    First Aid Kit Essentials
                </h1>
                <p className="text-gray-700 text-base sm:text-lg">
                    First aid kits are sold at many pharmacies and department stores, but you can also make your own. Keep one in your vehicle and your home for emergencies.
                </p>
            </div>

            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
                    A Basic First Aid Kit Should Contain:
                </h2>
                <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                    <li>Adhesive bandages in multiple sizes and shapes</li>
                    <li>Gauze pads in multiple sizes</li>
                    <li>Compress dressings</li>
                    <li>Adhesive cloth tape</li>
                    <li>A roll of gauze</li>
                    <li>Gloves</li>
                    <li>Antiseptic wipes</li>
                    <li>Antibiotic ointment</li>
                    <li>Hydrocortisone ointment</li>
                    <li>A breathing barrier for performing CPR</li>
                    <li>An instant cold compress</li>
                    <li>Baby aspirin</li>
                    <li>Tweezers</li>
                    <li>An oral thermometer</li>
                    <li>An emergency blanket</li>
                </ul>
            </div>

            <div className="w-full max-w-4xl mt-6">
                <img
                    src={kit}
                    alt="First Aid Kit"
                    className="rounded-lg shadow-md w-full"
                />
            </div>

            <div className="w-full max-w-4xl mt-8 text-center text-gray-600 text-sm sm:text-base">
                <p>
                    Remember to regularly check your kit for expired items and replace them as needed.
                </p>
            </div>
        </div>
    );
}

export default FirstAidKits;
