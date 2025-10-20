const About = ({title, desc}) => {
    return (
        <div className="text-center my-[80px] flex flex-col gap-2 text-[#032916] p-4 md:p-0">
            <h2 className="text-[24px]">{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default About;