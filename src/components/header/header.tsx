import Logo from "../logo/logo";
import '../../sass/SassComponents/header.css';

type headerType = {
    measurement: boolean;
}

export default function Header({ measurement = false }: headerType) {
    return (
        <div className="header-main"
            style={{
                height: (measurement) ? '100%' : '10rem'
            }}
        >
            <div className="bg-img"
                style={{
                    display: (measurement) ? 'none' : 'block'
                }}
            />
            <div className="logo-section">
                <Logo />
            </div>
            <div className="navbar-section">
                <p className="navbar-content">Home</p>
                <p className="navbar-content">Contact</p>
                <p className="navbar-content">Request</p>
            </div>
        </div>
    );
}