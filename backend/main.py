from databases import Database
from sqlalchemy import create_engine, MetaData

DATABASE_URL = "YOUR_HEROKU_POSTGRESQL_URL"  # Replace with your Heroku PostgreSQL URL

database = Database(DATABASE_URL)
metadata = MetaData()

engine = create_engine(DATABASE_URL)

