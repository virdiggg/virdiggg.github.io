"use client";
import Link from 'next/link';
import { BackBtn } from '@/app/ui/btn-back';
import { usePathname } from 'next/navigation'
import React from 'react';

function btnCalculator() {
    return (
        <Link
            key="Kalkulator"
            href='/calc'
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
            <p className="hidden md:block">Kalkulator</p>
        </Link>
    );
}

function btnPresentValue() {
    return (
        <Link
            key="Present Value"
            href='/pv'
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
            <p className="hidden md:block">Present Value</p>
        </Link>
    );
}

function btnBack() {
    return (
        <BackBtn />
    );
}

export function BtnColl() {
    let pathname = usePathname();

    let buttons;
    switch (pathname) {
        case '/calc':
            buttons = [btnPresentValue(), btnBack()];
            break;
        case '/pv':
            buttons = [btnCalculator(), btnBack()];
            break;
        case '/npv':
            buttons = [btnCalculator(), btnBack()];
            break;
        default:
            buttons = [btnCalculator(), btnPresentValue()];
            break;
    }

    return (
        <>
            {buttons.map((btn, index) => (
                <React.Fragment key={index}>
                    {btn}
                </React.Fragment>
            ))}
        </>
    );
}
