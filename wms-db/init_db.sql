CREATE TABLE warehouse (
  id SERIAL PRIMARY KEY,
  capacity int,
  location varchar
);

CREATE TABLE sku (
  id SERIAL PRIMARY KEY,
  name varchar,
  serial_number varchar,
  occupied_space_per_unit int,
  minimum_stock_required int
);

CREATE TABLE sku_to_warehouse (
  id SERIAL PRIMARY KEY,
  warehouse_id int,
  sku_id int,
  quantity int
);

ALTER TABLE sku_to_warehouse ADD FOREIGN KEY (warehouse_id) REFERENCES warehouse (id);

ALTER TABLE sku_to_warehouse ADD FOREIGN KEY (sku_id) REFERENCES sku (id);