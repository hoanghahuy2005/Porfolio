import "./About.css"
export default function About(){
    // console.log(window.innerWidth);
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-content">
                    <p id="txt">ABOUT ME</p>
                    <div className="about-name">
                        <span>Thanh</span>
                        <span>Hung</span>
                    </div>
                    <p className="description">I graduated in Thermal Engineering from Hanoi University of Industry and have six years of professional experience in heating, ventilation, and air-conditioning systems. I focus on HVAC design, heat-load calculations, and developing efficient, energy-saving engineering solutions tailored to each project.</p>
                    <div className="about-skills">
                        <span>AutoCAD</span>
                        <span>HVAC Design</span>
                        <span>Revit</span>
                        <span>Ventilation</span>
                    </div>
                </div>
            </div>
        </section>
    )
}