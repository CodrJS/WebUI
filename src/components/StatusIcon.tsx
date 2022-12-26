import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { STATUS } from "types/Status";

export default function StatusIcon({ status }: { status: STATUS }) {
  switch (status) {
    case "success":
      return (
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-6 w-6 text-green-600"
            aria-hidden="true"
          />
        </div>
      );
    case "warn":
      return (
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-yellow-500"
            aria-hidden="true"
          />
        </div>
      );
    case "error":
      return (
        <div className="flex-shrink-0">
          <XCircleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
        </div>
      );
    case "info":
      return (
        <div className="flex-shrink-0">
          <ExclamationCircleIcon
            className="h-6 w-6 text-sky-600"
            aria-hidden="true"
          />
        </div>
      );
    default:
      return null;
  }
}
