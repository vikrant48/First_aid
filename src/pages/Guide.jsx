import React from 'react';
import CPR from "../assets/cpr.gif"
import burn from "../assets/burn.webp"
import chock from "../assets/chock.gif"
import blood from "../assets/blood.jpg"
import rice from "../assets/rice.png"
import poison from "../assets/Poisoning.png"
import heart from "../assets/heart.png"
import shock from "../assets/shock.png"
import nosebleed from "../assets/nosebleed.jpg"
import hypothermia from "../assets/hr.png"
 import heatstroke from "../assets/heat.png"



const Guide = () => {
    const procedures = [
        {
            title: "CPR (Cardiopulmonary Resuscitation)",
            steps: [
                "Check the person’s responsiveness.",
                "Call for emergency medical help.",
                "Start chest compressions at a rate of 100-120 per minute.",
                "Provide rescue breaths if trained to do so.",
            ],
            image: CPR,
        },
        {
            title: "Burns Treatment",
            steps: [
                "Cool the burn under running water for 10-15 minutes.",
                "Cover the burn with a sterile, non-adhesive bandage.",
                "Avoid breaking blisters or applying ointments.",
            ],
            image: burn,
        },
        {
            title: "Choking (Heimlich Maneuver)",
            steps: [
                "Ask the person if they are choking.",
                "Stand behind the person and wrap your arms around their waist.",
                "Make a fist and place it just above the navel.",
                "Perform quick, upward thrusts until the object is expelled.",
            ],
            image: chock,
        },
        {
            title: "Bleeding Control",
            steps: [
                "Apply direct pressure to the wound with a clean cloth.",
                "Keep the injured area elevated above heart level, if possible.",
                "Secure the cloth with a bandage and seek medical help if necessary.",
            ],
            image: blood,
        },
        {
            title: "Fractures and Sprains",
            steps: [
                "Immobilize the injured area using a splint or sling.",
                "Apply ice packs to reduce swelling.",
                "Avoid moving the injured limb until medical help arrives.",
            ],
            image: rice,
        },
        {
            title: "Poisoning",
            steps: [
                "Identify the poison (if possible).",
                "Call a poison control center or emergency medical help immediately.",
                "Do not induce vomiting unless instructed to do so by a professional.",
                "Keep the person calm and monitor their breathing.",
            ],
            image: poison, 
        },
        {
            title: "Heart Attack",
            steps: [
                "Call emergency medical services immediately.",
                "Help the person sit down and stay calm.",
                "Loosen tight clothing and provide aspirin if they are not allergic.",
                "Monitor their breathing and pulse until help arrives.",
            ],
            image: heart, 
        },
        {
            title: "Shock Management",
            steps: [
                "Lay the person down and elevate their legs, unless there is an injury.",
                "Keep them warm using a blanket.",
                "Do not give them food or drink.",
                "Call for medical assistance immediately.",
            ],
            image: shock, 
        },
        {
            title: "Nosebleeds",
            steps: [
                "Have the person sit down and lean slightly forward.",
                "Pinch the soft part of the nose for 10-15 minutes.",
                "Avoid blowing the nose or leaning back.",
                "If bleeding persists, seek medical help.",
            ],
            image: nosebleed, 
        },
        {
            title: "Hypothermia",
            steps: [
                "Move the person to a warm and dry place.",
                "Remove any wet clothing and wrap them in blankets.",
                "Warm them gradually using warm beverages or heating pads (avoid direct heat).",
                "Seek medical help immediately.",
            ],
            image: hypothermia, 
        },
        {
            title: "Heat Stroke",
            steps: [
                "Move the person to a cool, shaded area.",
                "Cool them down with water or damp cloths.",
                "Have them sip water if conscious.",
                "Call emergency services immediately.",
            ],
            image: heatstroke, 
        },
    ];

    return (
        <div className="guide bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-center mb-4">First Aid Procedures</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {procedures.map((procedure, index) => (
                    <div
                        key={index}
                        className="procedure bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{procedure.title}</h2>
                        <img
                            src={procedure.image}
                            alt={`${procedure.title} illustration`}
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <ol className="list-decimal pl-5 space-y-2">
                            {procedure.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guide;