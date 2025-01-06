import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {  useDispatch, useSelector } from 'react-redux';
import LocationDialog from './LocationDialog';
import { closeDialog } from '../../store/slices/dialogSlice';
import VehicleDialog from './VehicleDialog';
import CarDetailsDialog from './CarDetailsDialog';

const ReusableDialog = () => {
  const { isOpen, title, content} = useSelector((state) => state.root.dialog);
  const dispatch = useDispatch();

  const generateContent = () => {
    switch (content) {
      case 'locationDialog':
        return <LocationDialog />;
      case 'vehicleDialog':
        return <VehicleDialog/>;
      case 'carDetails':
        return <CarDetailsDialog/>;
      default:
        return <p>No Content</p>;
    }
  };

  const handleClose = () => {
    dispatch(closeDialog());
  }

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={handleClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* Center the dialog */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                {title}
              </Dialog.Title>
              <div className="mt-4">
                {generateContent()}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReusableDialog;
