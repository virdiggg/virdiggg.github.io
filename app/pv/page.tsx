import NetPresetValue from '@/app/ui/preset-value';
import { BtnColl } from '@/app/ui/btn-collection';

export default function PresentValue() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <label className="block mb-2 text-sm font-medium">Present Value</label>
            <BtnColl />
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                    <NetPresetValue />
                </div>
            </div>
        </main>
    );
}
