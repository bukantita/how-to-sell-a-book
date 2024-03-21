import React from 'react'

const styles = {
    container: {
        maxWidth: '700px',
        margin: '0 auto',
        padding: '15px',
        maxWidht: '750px',
    },
    subtitle: {
        marginTop: '3px',
        fontSize: '10px',
    },
    productContainer: {
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
    },
    product: {
        flex: '1',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '15px',
        backgroundColor: '#c4deb9'
    }
};

class Karya extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <h2>My Projects</h2>
                <div style={styles.productContainer}>
                    <div style={styles.product}>
                        <h3><b>Project A</b></h3>
                        <p style={styles.subtitle}>February 2024</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat."</p>
                    </div>
                    <div style={styles.product}>
                        <h3><b>Project B</b></h3>
                        <p style={styles.subtitle}>February 2023</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat."</p>
                    </div>
                    <div style={styles.product}>
                        <h3><b>Project c</b></h3>
                        <p style={styles.subtitle}>February 2022</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat."</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Karya;