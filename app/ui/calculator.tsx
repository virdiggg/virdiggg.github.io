"use client";
import React, { useState, useEffect } from "react";
import { limitToTwoDigits } from '@/app/lib/utils';
import { usePathname } from 'next/navigation'

const initCost = 0.22;

function Calculator() {
    const [risiko, setRisiko] = useState('');
    const [risikoPasar, setRisikoPasar] = useState('');
    const [riskFree, setRiskFree] = useState('');
    const [bunga, setBunga] = useState('');
    const [modalSendiri, setModalSendiri] = useState('');
    const [pinjamBank, setPinjamBank] = useState('');
    const [modal, setModal] = useState('');

    const [CAPM, setCAPM] = useState(0);
    const [countCAPM, setCountCAPM] = useState(0);
    const [countCostOfDebt, setCountCostOfDebt] = useState(0);
    const [costOfDebt, setCostOfDebt] = useState(0);
    const [costOfCapital, setCostOfCapital] = useState(0);
    const [rpModalSendiri, setRPModalSendiri] = useState(0);
    const [rpPinjamBank, setRPPinjamBank] = useState(0);

    useEffect(() => {
        if (risiko !== '' && risikoPasar !== '') {
            let floatRiskFree = parseFloat(riskFree);
            const countRisiko = floatRiskFree + (parseFloat(risiko) * (parseFloat(risikoPasar) - floatRiskFree));
            setCAPM(countRisiko);
        }

        if (bunga !== '') {
            const countBunga = parseFloat(bunga) * (1 - initCost);
            setCostOfDebt(countBunga);
        }

        if (modalSendiri !== '' && CAPM !== 0) {
            let countCAPM = CAPM * (parseFloat(modalSendiri) / 100);
            setCountCAPM(countCAPM);
        }

        if (pinjamBank !== '' && costOfDebt !== 0) {
            let countCostOfDebt = costOfDebt * (parseFloat(pinjamBank) / 100);
            setCountCostOfDebt(countCostOfDebt);
        }

        if (countCAPM !== 0 && countCostOfDebt !== 0) {
            const countCostOfCapital = countCAPM + countCostOfDebt;
            setCostOfCapital(countCostOfCapital);
        }

        if (countCAPM !== 0 && countCostOfDebt !== 0) {
            const countCostOfCapital = countCAPM + countCostOfDebt;
            setCostOfCapital(countCostOfCapital);
        }

        if (modal !== '') {
            setRPModalSendiri((parseFloat(modal) * parseFloat(modalSendiri)) / 100);
            setRPPinjamBank((parseFloat(modal) * parseFloat(pinjamBank)) / 100);
        }

    }, [risiko, risikoPasar, riskFree, bunga, modalSendiri, pinjamBank, countCAPM, countCostOfDebt, modal]);

    return (
        <main className="flex min-h-screen p-6">
            <div className="flex-col">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Beta Risiko (desimal)</label>
                    <input type="number"
                        name="risiko"
                        id="risiko"
                        step="0.1"
                        onChange={e => setRisiko(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Risiko"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Risiko pasar/Risk market (persen)</label>
                    <input type="number"
                        name="risiko_pasar"
                        id="risiko_pasar"
                        step="0.1"
                        onChange={e => setRisikoPasar(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Risiko Pasar"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Risk free (persen)</label>
                    <input type="number"
                        name="risk_free"
                        id="risk_free"
                        step="0.1"
                        onChange={e => setRiskFree(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Risk Free"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Bunga (persen)</label>
                    <input type="number"
                        name="bunga"
                        id="bunga"
                        step="0.1"
                        onChange={e => setBunga(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bunga"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Modal Sendiri (persen)</label>
                    <input type="number"
                        name="modal_sendiri"
                        id="modal_sendiri"
                        step="0.1"
                        onChange={e => setModalSendiri(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Modal Sendiri"
                        value={modalSendiri}
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Pinjam Bank (persen)</label>
                    <input type="number"
                        name="pinjam_bank"
                        id="pinjam_bank"
                        step="0.1"
                        onChange={e => setPinjamBank(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pinjam Bank"
                        value={pinjamBank}
                        required />
                </div>
            </div>
            <div className="flex-col">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">CAPM</label>
                    <input type="number"
                        name="capm"
                        id="capm"
                        step="0.1"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={limitToTwoDigits(CAPM)}
                        readOnly />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Cost of Debt</label>
                    <input type="number"
                        name="cost_of_debt"
                        id="cost_of_debt"
                        step="0.1"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={limitToTwoDigits(costOfDebt)}
                        readOnly />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Persen CAPM</label>
                    <input type="number"
                        name="persen_capm"
                        id="persen_capm"
                        step="0.1"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={limitToTwoDigits(countCAPM)}
                        readOnly />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Persen Cost of Debt</label>
                    <input type="number"
                        name="persen_cost_of_debt"
                        id="persen_cost_of_debt"
                        step="0.1"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={limitToTwoDigits(countCostOfDebt)}
                        readOnly />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Cost of Capital/Diskonto</label>
                    <input type="number"
                        name="cost_of_capital"
                        id="cost_of_capital"
                        step="0.1"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={limitToTwoDigits(costOfCapital)}
                        readOnly />
                </div>
            </div>
            <div className="flex-col">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Modal</label>
                    <input type="number"
                        name="modal"
                        id="modal"
                        step="0.1"
                        onChange={e => setModal(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Modal"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Modal Sendiri</label>
                    <input type="number"
                        name="modal"
                        id="modal"
                        step="0.1"
                        onChange={e => setModal(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={Math.round(rpModalSendiri)}
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Pinjam Bank</label>
                    <input type="number"
                        name="modal"
                        id="modal"
                        step="0.1"
                        onChange={e => setModal(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={Math.round(rpPinjamBank)}
                        required />
                </div>
            </div>
            <div className="flex-col">
            </div>
        </main>
    );
}

export default Calculator;
