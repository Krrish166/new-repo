resource "aws_instance" "ec2" {
  ami = "ami-0ff5003538b60d5ec" # Amazon Linux 2023 (Mumbai)
  instance_type = "t3.micro"
  tags={
    Name="manual-trigger"
  }
}
