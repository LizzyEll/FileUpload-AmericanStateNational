import { Poppins } from 'next/font/google';
import styles from '@/styles/Dashboard.module.css';
import { useState, useEffect } from 'react';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '700']});


export default function Home() {
    return (
        <>
            <main className={poppins.className}>
                <div className={`box`}>
                    <h1>Uploadz - Dashboard</h1>
                    <p>Welcome to the dashboard!</p>
                    <p>This is where you start.</p>
                </div>
            </main>
        </>
    );
}