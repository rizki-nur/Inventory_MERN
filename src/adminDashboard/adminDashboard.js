import React, { Component } from 'react';
import ListProducts from './ListProducts';

class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <section>
                    <ListProducts />
                </section>
            </div>
        );
    }
}

export default AdminDashboard;
