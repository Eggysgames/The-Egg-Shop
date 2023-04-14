import React from 'react'
import Head from 'next/head'
import { atom, useAtom } from 'jotai'
import { CheckoutList } from './eggbox'
import { BuyButton } from './eggbox'
import { totalWhiteEggsAtom } from './state'
import { totalBlueEggsAtom } from './state'
import { totalGoldEggsAtom } from './state'

export default function Checkout() {
    const [totalWhiteEggs] = useAtom(totalWhiteEggsAtom)
    const [totalBlueEggs] = useAtom(totalBlueEggsAtom)
    const [totalGoldEggs] = useAtom(totalGoldEggsAtom)

    return (
        <>
            {/* My Title */}
            <div className="container mx-auto max-w-screen-md ">
                <div>
                    <div
                        className="p-6 bg-gradient-to-t from-cyan-50 to-cyan-100 rounded-md drop-shadow-lg"
                        style={{ borderRadius: '40px' }}
                    >
                        <div
                            className="text-center text-5xl font-semibold text-blue-900/80"
                            style={{ fontFamily: 'Bubbly' }}
                        >
                            The Egg Shop
                        </div>
                    </div>

                    <div
                        className="p-4 text-2xl"
                        style={{ fontFamily: 'Talk-Comic' }}
                    >
                        Welcome to the place where you buy virtual eggs!
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '50px',
                        }}
                    >
                        <div
                            className="p-4 text-5xl"
                            style={{
                                fontFamily: 'Talk-Comic',
                                marginTop: '60px',
                            }}
                        >
                            Checkout (
                            {totalWhiteEggs + totalBlueEggs + totalGoldEggs}{' '}
                            items)
                        </div>
                    </div>

                    <div
                        style={{
                            padding: '100px',
                            fontFamily: 'Arial',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '50px',
                            fontSize: '24px', // or any other size you prefer
                        }}
                    >
                        <div>
                            <CheckoutList />
                            <BuyButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
