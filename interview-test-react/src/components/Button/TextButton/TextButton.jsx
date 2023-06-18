const TextButton = ({ text, onClick }) => {
    return (
        <div className="text-sm">
            <button className="font-semibold leading-6 text-indigo-600 click:text-indigo-500" onClick={onClick}>{text}</button>
        </div>
    );
};

export default TextButton;