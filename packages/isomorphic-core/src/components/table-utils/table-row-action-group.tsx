import EyeIcon from "@core/components/icons/eye";
import PencilIcon from "@core/components/icons/pencil";
import { ActionIcon, Flex, Tooltip } from "rizzui";
import Link from "next/link";
import cn from "@core/utils/class-names";
import DeletePopover from "../delete-popover";

export default function TableRowActionGroup({
  onDelete,
  editUrl = "#",
  Edit,
  viewUrl = "",
  deletePopoverTitle = "Delete the appointment",
  deletePopoverDescription = "Are you sure you want to delete this item?",
  className,
  Additional
}: {
  onDelete?: () => void;
  editUrl?: string;
  Edit?: React.FC
  viewUrl?: string;
  deletePopoverTitle?: string;
  deletePopoverDescription?: string;
  className?: string;
  Additional?: React.FC
}) {
  return (
    <Flex
      align="center"
      justify="end"
      gap="3"
      className={cn("pe-3", className)}
    >
      {
        Additional ?
          <Additional /> : <></>
      }
      <Tooltip
        size="sm"
        content="Edit Item"
        placement="top"
        color="invert"
      >
        {
          Edit ?
            <Edit /> :
            <Link href={editUrl}>
              <ActionIcon
                as="span"
                size="sm"
                variant="outline"
                aria-label="Edit Item"
              >
                <PencilIcon className="size-4" />
              </ActionIcon>
            </Link>
        }
      </Tooltip>
      {
        viewUrl ?
          <Tooltip
            size="sm"
            content="View Item"
            placement="top"
            color="invert"
          >
            <Link href={viewUrl}>
              <ActionIcon
                as="span"
                size="sm"
                variant="outline"
                aria-label="View item"
              >
                <EyeIcon className="size-4" />
              </ActionIcon>
            </Link>
          </Tooltip>
          : <></>
      }
      <DeletePopover
        title={deletePopoverTitle}
        description={deletePopoverDescription}
        onDelete={onDelete}
      />
    </Flex>
  );
}
