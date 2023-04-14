import React from 'react'
import Head from 'next/head'
import { atom, useAtom } from 'jotai'
import { CheckoutList } from './eggbox'
import { ReturnHome } from './eggbox'
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
                        className="text-center text-2xl"
                        style={{ fontFamily: 'Arial', padding: '30px' }}
                    >
                        Your order was successful placed. Congratulations you
                        just wasted your life savings on eggs. Your wife will be
                        angry at you that you just spent all the wedding money
                        on useless virtual eggs that she will now divorce you.
                        This will cause you to fall into a deep pit of
                        alcoholism which will slowly tear your life apart.
                        Eventually you end up homeless and freezing sleeping
                        under a bridge. But you can always feel warm inside
                        knowing you own some of Eggy's special virtual eggs
                        (^_^)
                    </div>

                    <div
                        style={{
                            padding: '10px',
                            fontFamily: 'Arial',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '50px',
                            fontSize: '24px', // or any other size you prefer
                        }}
                    >
                        <div>
                            <ReturnHome />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
