"use client"

import Container from "@/components/container";
import { useState } from "react";

const Faq = () => {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer:
                "Our return policy allows returs within 30 days of purchase with a valid receipt.",
        },
        {
            question: "How do I track my order?",
            answer:
                "You can track your order using the tracking link sent to your email after shipping.",
        },
        {
            question: "Do you offer international shipping?",
            answer:
                "Yes, we offer international shipping to select countries. Please check our shipping policy for more details.",
        },
    ];

    const OpenFaq = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="my-[160px]">
            <Container>
                <h4 className="text-center mb-5 text-[30px] font-bold text-[#032916]">
                    Perguntas frequentes
                </h4>

                <div className="flex flex-wrap w-full gap-4 items-start">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="md:w-[48%] w-full bg-[#06542E] text-white font-semibold text-[20px] mb-2 cursor-pointer p-4 "
                            onClick={() => OpenFaq(index)}
                        >
                            <div className="flex justify-between items-center">
                                {faq.question}
                                <span>{open === index ? "x" : "+"}</span>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${open === index ? "max-h-40 mt-4" : "max-h-0"
                                    }`}
                            >
                                <p className="font-normal text-[16px]">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Faq;
