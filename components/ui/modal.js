export default function Modal({ children, onClose }) {
    return (
        <>
            <div onClick={onClose}>
                <div onClick={(e) => e.stopPropagation()}>
                    {children}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
}
