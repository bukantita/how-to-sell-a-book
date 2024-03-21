import React from 'react'

const styles = {
    container: {
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: 'auto',
        marginTop: '50px',
    },
    title: {
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '40px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginBottom: '10px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        borderRadius: '40px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginBottom: '10px',
        resize: 'vertical',
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '40px',
        border: 'none',
        backgroundColor: "#c4deb9",
        color: '#black',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
};

class contact extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.title}>Get in Touch</h2>
                <form>
                    <div style={styles.formGroup}>
                        <label htmlFor="name" style={styles.label}>Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" style={styles.input} required />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" style={styles.input} required />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="message" style={styles.label}>Message:</label>
                        <textarea id="message" name="message" placeholder="Type your things" style={styles.textarea} required></textarea>
                    </div>
                    <button type="submit" style={styles.button}>Kirim</button>
                </form>
            </div>
        );
    }
}

export default contact;