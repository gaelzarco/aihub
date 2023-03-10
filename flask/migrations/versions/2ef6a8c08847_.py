"""empty message

Revision ID: 2ef6a8c08847
Revises: 60ec815b1cea
Create Date: 2023-01-28 01:45:20.240831

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2ef6a8c08847'
down_revision = '60ec815b1cea'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.BIGINT(),
               server_default=None,
               existing_nullable=False,
               autoincrement=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.BIGINT(),
               server_default=sa.Identity(always=True, start=1, increment=7, minvalue=1, maxvalue=9223372036854775807, cycle=False, cache=1),
               existing_nullable=False,
               autoincrement=True)

    # ### end Alembic commands ###
