import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { EggBox } from './eggbox'
import { BuyEggButton } from './eggbox'
import { CheckoutButton } from './eggbox'
import { atom, useAtom } from 'jotai'
import { CheckoutList } from './eggbox'

import { totalWhiteEggsAtom } from './state'
import { totalBlueEggsAtom } from './state'
import { totalGoldEggsAtom } from './state'

export default function Home() {
    const [totalWhiteEggs, updatetotalWhiteEggs] = useAtom(totalWhiteEggsAtom)
    const [totalBlueEggs, updatetotalBlueEggs] = useAtom(totalBlueEggsAtom)
    const [totalGoldEggs, updatetotalGoldEggs] = useAtom(totalGoldEggsAtom)

    return (
        <>
            <Head>
                <title>The Egg Shop</title>
            </Head>

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

                    {/* Eggs to Buy */}
                    <div className="grid grid-cols-3 gap-9 ">
                        <div>
                            <EggBox imageUrl="/images/whiteEgg.png" />
                            <BuyEggButton
                                onClick={() => {
                                    updatetotalWhiteEggs(totalWhiteEggs + 1)
                                    //console.log(totalWhiteEggs)
                                }}
                            />
                        </div>

                        <div>
                            <EggBox imageUrl="/images/blueEgg.png" />
                            <BuyEggButton
                                onClick={() => {
                                    updatetotalBlueEggs(totalBlueEggs + 1)
                                    //console.log(totalBlueEggs)
                                }}
                            />
                        </div>

                        <div>
                            <EggBox imageUrl="/images/goldEgg.png" />
                            <BuyEggButton
                                onClick={() => {
                                    updatetotalGoldEggs(totalGoldEggs + 1)
                                    //console.log(totalGoldEggs)
                                }}
                            />
                        </div>
                    </div>

                    {/* Egg Shopping Cart */}

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '50px',
                        }}
                    >
                        <div
                            className="p-4 text-2xl"
                            style={{
                                fontFamily: 'Talk-Comic',
                                marginTop: '60px',
                            }}
                        >
                            Egg Shopping Cart (
                            {totalWhiteEggs + totalBlueEggs + totalGoldEggs}{' '}
                            items)
                        </div>
                    </div>

                    <div
                        className="p-9 text-xl"
                        style={{
                            fontFamily: 'Arial',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        {totalWhiteEggs > 0 && (
                            <div>Purchase White Eggs ({totalWhiteEggs})</div>
                        )}
                        {totalBlueEggs > 0 && (
                            <div>Purchase Blue Eggs ({totalBlueEggs}) </div>
                        )}
                        {totalGoldEggs > 0 && (
                            <div>Purchase Gold Eggs ({totalGoldEggs})</div>
                        )}

                        {(totalWhiteEggs > 0 ||
                            totalBlueEggs > 0 ||
                            totalGoldEggs > 0) && <CheckoutButton />}
                    </div>
                </div>
            </div>
        </>
    )
}
