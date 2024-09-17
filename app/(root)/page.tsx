import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';


const Home = () => {
    const loggedIn = { firstName: 'David', lastName: 'Benz', email: 'davidbenz@gmail.com' };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type = "greeting"
                    title= "Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account transactions efficiently."
                    /> 

                    <TotalBalanceBox 
                    totalBanks = {1}
                    totalCurrentBalance = {6330118.35}
                    accounts = {[]}
                    />

                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={ [{currentBalance: 1250.42}, {currentBalance: 9672.7}]}
            />
        </section>
    )
    
}

export default Home;