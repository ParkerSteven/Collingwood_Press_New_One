
"use client";

import { useState, type FormEvent } from "react";

interface OptOutFormData {
    fullName: string;
    email: string;
    state: string;
    optOutSale: boolean;
    optOutAdvertising: boolean;
}

export default function PrivacyOptOutForm() {
    const [formData, setFormData] = useState<OptOutFormData>({
        fullName: "",
        email: "",
        state: "",
        optOutSale: false,
        optOutAdvertising: false,
    });

    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.optOutSale && !formData.optOutAdvertising) {
            setError("Please select at least one privacy request.");
            return;
        }

        setError("");

        // TODO: Connect your backend API to submit privacy requests.
        // Do not display a success message until the API confirms submission.
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <input
                type="text"
                required
                aria-label="Full Name"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#E7665D]"
            />

            <input
                type="email"
                required
                aria-label="Email Address"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#E7665D]"
            />

            <input
                type="text"
                required
                aria-label="State of Residence"
                placeholder="State of Residence"
                value={formData.state}
                onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                }
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#E7665D]"
            />

            <div className="mt-2 flex flex-col gap-3">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                    <input
                        type="checkbox"
                        checked={formData.optOutSale}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                optOutSale: e.target.checked,
                            })
                        }
                        className="mt-1 h-4 w-4 accent-[#E7665D]"
                    />
                    <span>Do Not Sell My Personal Information</span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                    <input
                        type="checkbox"
                        checked={formData.optOutAdvertising}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                optOutAdvertising: e.target.checked,
                            })
                        }
                        className="mt-1 h-4 w-4 accent-[#E7665D]"
                    />
                    <span>
                        Do Not Share My Personal Information for Behavioral Advertising
                    </span>
                </label>
            </div>

            {error && (
                <p role="alert" className="text-xs text-red-600">
                    {error}
                </p>
            )}

            <div className="mt-2">
                <button
                    type="submit"
                    className="rounded-lg bg-[#344768] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E7665D]"
                >
                    Submit Request
                </button>
            </div>
        </form>
    );
}
