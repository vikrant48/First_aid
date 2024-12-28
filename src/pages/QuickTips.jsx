import React from 'react';

const QuickTips = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
            <div className="w-full max-w-4xl text-center mb-6">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Quick First Aid Tips</h1>
                <p className="text-gray-700 text-lg">
                    Here are some essential tips to handle emergencies effectively. Remember, staying calm and taking quick actions can save lives.
                </p>
            </div>

            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Tips</h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700">
                    <li>
                        <span className="font-bold">Stay Calm:</span> Panic can worsen the situation. Take deep breaths and assess the scenario.
                    </li>
                    <li>
                        <span className="font-bold">Call for Help:</span> Dial emergency services immediately. Provide clear information about the incident.
                    </li>
                    <li>
                        <span className="font-bold">Check Breathing:</span> Ensure the person is breathing. If not, perform CPR immediately if trained.
                    </li>
                    <li>
                        <span className="font-bold">Stop Bleeding:</span> Apply firm pressure on the wound with a clean cloth to stop bleeding.
                    </li>
                    <li>
                        <span className="font-bold">Treat Burns:</span> Cool the burn under running water for 10-20 minutes. Do not apply ice.
                    </li>
                    <li>
                        <span className="font-bold">Choking:</span> Perform the Heimlich maneuver if someone is choking and cannot breathe.
                    </li>
                </ul>
            </div>

            <div className="w-full max-w-4xl mt-6">
                <img
                    src="/images/first_aid_tips.jpg"
                    alt="First Aid Tips"
                    className="rounded-lg shadow-md w-full"
                />
            </div>

            <div className="w-full max-w-4xl mt-6 text-center text-gray-600">
                <p>
                    Note: This is a general guide. Always seek professional medical help when needed.
                </p>
            </div>
        </div>
    );
};

export default QuickTips;
