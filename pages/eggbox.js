import { useState } from 'react'
import Link from 'next/link'
import { atom, useAtom } from 'jotai'
import { totalWhiteEggsAtom } from './state'
import { totalBlueEggsAtom } from './state'
import { totalGoldEggsAtom } from './state'
import { textAtom } from './state'

export default function D() {}

export function EggBox({ imageUrl }) {
    return (
        <div className="flex justify-center mt-9 border-solid border-0 border-indigo-300 rounded-md bg-cyan-50 drop-shadow-lg hover:bg-sky-100">
            <img
                src={imageUrl}
                alt="An image of an egg"
                width={100}
                height={140}
                style={{
                    margin: '10px',
                }}
            />
        </div>
    )
}

export function BuyEggButton({ onClick, MyNameNeverUsedYet }) {
    return (
        <div className="flex justify-center mt-3">
            <button
                className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-full border-none drop-shadow-lg"
                onClick={onClick}
            >
                Buy Egg
            </button>
        </div>
    )
}

export function CheckoutButton({ onClick }) {
    return (
        <div className="flex justify-center mt-3">
            <Link href="/checkout">
                <button
                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full border-none drop-shadow-lg"
                    onClick={onClick}
                >
                    Proceed to Checkout
                </button>
            </Link>
        </div>
    )
}

export function CheckoutList() {
    const [totalWhiteEggs] = useAtom(totalWhiteEggsAtom)
    const [totalBlueEggs] = useAtom(totalBlueEggsAtom)
    const [totalGoldEggs] = useAtom(totalGoldEggsAtom)

    return (
        <div>
            <div>
                <div style={{ marginBottom: '7px' }}>
                    Total White Eggs ({totalWhiteEggs})
                </div>
                <div style={{ marginBottom: '7px' }}>
                    Total Blue Eggs ({totalBlueEggs})
                </div>
                <div>Total Gold Eggs ({totalGoldEggs})</div>
            </div>
        </div>
    )
}

export function BuyButton({ onClick }) {
    return (
        <div className="flex justify-center mt-3">
            <Link href="/bought">
                <button
                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full border-none drop-shadow-lg"
                    onClick={onClick}
                >
                    Buy this order
                </button>
            </Link>
        </div>
    )
}

export function ReturnHome({ onClick }) {
    return (
        <div className="flex justify-center mt-3">
            <Link href="/">
                <button
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-full border-none drop-shadow-lg"
                    onClick={onClick}
                >
                    Return to Shop
                </button>
            </Link>
        </div>
    )
}
