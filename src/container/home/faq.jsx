"use client"

import Container from "@/components/container";
import { useState } from "react";

const Faq = () => {

    const [open, setOpen] = useState(false);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows returs within 30 days of purchase with a valid receipt."
        },
        {
            question: "How do I track my order?",
            answer: "You can track your order using the tracking link sent to your email after shipping."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to select countries. Please check our shipping policy for more details."
        },
          {
            question: "How do I track my order?",
            answer: "You can track your order using the tracking link sent to your email after shipping."
        },
          {
            question: "How do I track my order?",
            answer: "You can track your order using the tracking link sent to your email after shipping."
        },
          {
            question: "How do I track my order?",
            answer: "You can track your order using the tracking link sent to your email after shipping."
        },
    ];

    const OpenFaq = (index) => {
        setOpen(open === index ? null : index);
    }

    return (
        <div className="mt-[80px]">
            <Container>
                <h4 className="text-center mb-5 text-[30px] font-bold text-[#032916]">Perguntas frequentes</h4>

                <div className="flex flex-wrap w-full gap-4 items-start">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="w-[48%] bg-[#06542E] text-white font-semibold text-[20px] mb-2 cursor-pointer p-4"
                            onClick={() => OpenFaq(index)}
                        >
                            <div className="flex justify-between">
                                {faq.question}
                                <span>{open === index ? "X" : ">"}</span>
                            </div>

                            {open === index && 
                            <div className="mt-4 font-normal text-[16px]">
                                {faq.answer}
                            </div>
                            }
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Faq;