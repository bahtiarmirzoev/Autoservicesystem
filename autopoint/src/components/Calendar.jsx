import React from "react";

import { Link } from "react-router-dom";

const Calendar = () => {
<div class="bg-white md:py-8 px-4 lg:max-w-7xl lg:mx-auto lg:px-8">
    <p class="text-4xl font-bold text-gray-800 mb-8">March 2021</p>
    <div class="inline-flex flex-col space-y-1 items-start justify-start h-full w-full">
    <div class="inline-flex space-x-28 items-start justify-start pr-24 h-full w-full">
        <p class="w-12 h-full text-sm font-medium text-gray-800 uppercase">M</p>
        <p class="w-12 h-full text-sm font-medium text-gray-800 uppercase">T</p>
        <p class="w-12 h-full text-sm font-medium text-gray-800 uppercase">W</p>
        <p class="w-12 h-full text-sm font-medium text-gray-800 uppercase">T</p>
        <p class="w-12 h-full text-sm font-medium text-gray-800 uppercase">F</p>
        <p class="w-12 h-full text-sm font-medium text-gray-800 uppercase">S</p>
        <p class="w-12 h-full text-sm font-medium text-gray-800 uppercase">S</p>
    </div>
    <div class="flex flex-col items-start justify-start">
        <div class="inline-flex items-center justify-start h-full w-full">
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">01</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">02</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">03</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">04</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">05</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">06</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">07</p>
            </div>
        </div>
        <div class="inline-flex items-center justify-start w-full h-full">
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">08</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">09</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">10</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">11</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">12</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">13</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">14</p>
            </div>
        </div>
        <div class="inline-flex items-center justify-start w-full h-full">
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">15</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">16</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">17</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">18</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">19</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">20</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">21</p>
            </div>
        </div>
        <div class="inline-flex items-center justify-start h-full w-full">
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">22</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">23</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">24</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">25</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">26</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">27</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">28</p>
            </div>
        </div>
        <div class="inline-flex items-center justify-start w-full h-full">
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">29</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">30</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="text-sm font-medium text-gray-800">31</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="opacity-50 text-sm font-medium text-gray-800">01</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="opacity-50 text-sm font-medium text-gray-800">02</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="opacity-50 text-sm font-medium text-gray-800">03</p>
            </div>
            <div class="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                <p class="opacity-50 text-sm font-medium text-gray-800">04</p>
            </div>
        </div>
    </div>
</div>
</div>
};

export default Calendar;
