import React from "react";

const Statistics = () => {
    return (
        <div className="bg-gray-200 h-screen w-full dark:bg-gray-700 flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Our service statistics
                </h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Total free servers
                                </dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    1.6M
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Servers a month
                                </dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    19.2K
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Servers a week
                                </dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    4.9K
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Total users
                                </dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                   0
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
