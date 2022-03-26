import React from 'react';
import './Utilities.css'
const Utilities = () => {
    return (
        <div >
            <div className='qus-ans'>
                <h1>1. How React works ?</h1>
                <p>রিয়্যাক্ট আমাদের যে Real dom আছে সেটারই একটা virtual dom  ক্রিয়েট করে রাখে।
                    আমরা যখনই আমাদের Real dom এ চেন্জ করি না কেন, সে তার virtual dom যেটা রেখে দিচ্ছে সে তার সাথে
                    real dom এর compere করে দেখে চেন্জ কোথায় কোথায় হয়েছে এবং সেটা রিপ্লেস করে update করে browser
                    এ দেখায়।
                </p>
            </div>
            <div className='qus-ans'>
                <h1>2. State Vs Props </h1>
                <p>
                    The state is an updatable structure that is used to contain data or
                    information about the component and can change over time. The change in state
                    can happen as a response to user action or system event.
                    A state must be kept as simple as possible. It represents the component's local state or information.
                    It can only be accessed or modified inside the component or by the component directly.</p>

                <p>
                    Props are read-only components. It is an object which stores the value of attributes of a tag and work similar
                    to the HTML attributes. It allows passing data from one component to other components.Props are immutable so we
                    cannot modify the props from inside the component.</p>
            </div>
            <div className='qus-ans'>
                <h1>3. How useState works ?</h1>
                <p>useState is a Hook that allows you to have state variables in functional components.
                    You pass the initial state to this function and it returns a variable with the current state value
                    (not necessarily the initial state) and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Utilities;