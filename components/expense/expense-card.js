export default function ExpenseCard({ title, date, category, amount }) {
    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>
                    {category} . {date}
                </p>
            </div>
            <div>
                <p>₹{amount}</p>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
}
