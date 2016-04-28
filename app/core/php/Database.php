<?php
class DataBase
{
	private $db;
	private $host;
	private $user;
	private $password;
	private $bdname;

	public function __construct() {
		$dbCon = mysqli_connect(getEnv("DB_HOST"), getEnv("DB_USERNAME"), getEnv("DB_PASSWORD"), getEnv("DB_NAME"));
		if(!$dbCon) {
        die("Nous sommes d&eacutesol&eacute : La connexion &agrave la base de donn&eacutees &agrave &eacutechou&eacutee ...");
    }else {
    	$this->db = $dbCon;
    }
	}

	public function select($id, $table, $options="") {
		return $this->db->query("SELECT ".$id." FROM ".$table." ".$options."");
	}

	public function insert($table, $id, $value) {
		return $this->db->query("INSERT INTO ".$table." (".$id.") VALUES (".$value.")");
	}

	public function update($table, $idValue, $options="") {
		return $this->db->query("UPDATE ".$table." SET ".$idValue." ".$options."");
	}

	public function delete($table, $idValue, $options="") {
		return $this->db->query("DELETE FROM ".$table." WHERE ".$idValue." ".$options."");
	}

	public function fetch_array($content) {
		return mysqli_fetch_array($content);
	}

	public function num_rows($content) {
		return mysqli_num_rows($content);
	}

	public function real_escape_string($content) {
		return mysqli_real_escape_string($this->db, $content);
	}
}
?>
