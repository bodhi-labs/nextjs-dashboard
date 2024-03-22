import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-zeus-100 text-zeus-500': status === 'pending',
          'bg-mantis-500 text-desert-100': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-zeus-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-desert-100" />
        </>
      ) : null}
    </span>
  );
}
