"use client";
import React, { useState, useEffect } from "react";

function PresetValue() {
    const [diskonto, setDiskonto] = useState('');
    const [tahun, setTahun] = useState('');
    const [modal, setModal] = useState('');
    const [pv, setPV] = useState(0);

    useEffect(() => {
        if (diskonto !== '' && tahun !== '' && modal !== '') {
            const resultPV = parseFloat(modal) / (1 + parseFloat(diskonto) / 100) ** parseFloat(tahun);
            setPV(resultPV);
        }
    }, [diskonto, tahun, modal]);

    return (
        <main className="flex min-h-screen p-6">
            <div className="flex-col">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Bunga Diskonto (persen)</label>
                    <input type="number"
                        name="bunga_diskonto"
                        id="bunga_diskonto"
                        step="0.1"
                        onChange={e => setDiskonto(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bunga Diskonto"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Tahun</label>
                    <input type="number"
                        name="tahun"
                        id="tahun"
                        onChange={e => setTahun(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tahun"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Modal</label>
                    <input type="number"
                        name="modal"
                        id="modal"
                        onChange={e => setModal(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Modal"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">PV{tahun}</label>
                    <input type="number"
                        name="pv"
                        id="pv"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="PV"
                        value={Math.round(pv)}
                        readOnly />
                </div>
            </div>
        </main>
    );
}

export default PresetValue;